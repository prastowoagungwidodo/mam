import React from 'react';
import RNRestart from 'react-native-restart';
import { Colors } from 'react-native-paper';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        paddingBottom: 128
    }
});

export default class HomeScrollView extends React.PureComponent {
    state = {
        distanceFromEnd: 10
    };

    UNSAFE_componentWillMount() {
        let self = this;

        if (this.props.distanceFromEnd) {
            self.setState({
                distanceFromEnd: this.props.distanceFromEnd
            });
        }
    }

    _handleScroll(event) {
        if (this.props.onScroll) {
            this.props.onScroll(event);
        }
        if (this._shouldLoadMore(event)) {
            if (this.props.onLoadMoreAsync && !this.props.loading) {
                this.props.onLoadMoreAsync();
            }
        }
    }

    _shouldLoadMore(event) {
        return this._distanceFromEnd(event) < this.state.distanceFromEnd;
    }

    _distanceFromEnd(event) {
        let {
            contentSize,
            contentInset,
            contentOffset,
            layoutMeasurement
        } = event.nativeEvent;

        let contentLength;
        let trailingInset;
        let scrollOffset;
        let viewportLength;
        let horizontal = this.props.horizontal || false;
        if (horizontal) {
            contentLength = contentSize.width;
            trailingInset = contentInset.right;
            scrollOffset = contentOffset.x;
            viewportLength = layoutMeasurement.width;
        } else {
            contentLength = contentSize.height;
            trailingInset = contentInset.bottom;
            scrollOffset = contentOffset.y;
            viewportLength = layoutMeasurement.height;
        }

        return contentLength + trailingInset - scrollOffset - viewportLength;
    }

    _delay = () => {
        return new Promise(resolve => {
            setTimeout(resolve, this.props.delay || 0);
        });
    };

    _handleOnRefresh = () => {
        this.setState({ isLoading: true });
        return new Promise(resolve => {
            if (this.props.onRefresh) {
                Promise.all([this.props.onRefresh(resolve), this._delay()]).then(() => {
                    this._endLoading();
                });
            } else {
                RNRestart.Restart();
            }
        });
    };

    _endLoading = () => {
        this.setState({
            isLoading: false
        });
    };

    render() {
        let self = this;

        return (
            <ScrollView
                {...this.props}
                style={ styles.container }
                automaticallyAdjustContentInsets={false}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={this._handleOnRefresh}
                        progressViewOffset={this.props.offset}/>
                }
                onScroll={self._handleScroll.bind(self)}
                scrollEventThrottle={200}>
                {this.props.children}
            </ScrollView>
        );
    }
}

