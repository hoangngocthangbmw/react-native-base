class LoadingManager {
    _defaultLoading = null;
  register(_ref) {
    
    if (!this._defaultLoading) {
      this._defaultLoading = _ref;
    }
  }
  unregister(_ref) {
    if (!!this._defaultLoading && this._defaultLoading._id === _ref._id) {
      this._defaultLoading = null;
    }
  }
  getDefault() {
    return this._defaultLoading;
  }
}

export default new LoadingManager();