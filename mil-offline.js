import { installOfflineWatcher } from "pwa-helpers/network.js";

export const offlineMixin = baseClass =>
  class extends baseClass {
    static get properties() {
      return {
        _offline: { type: Boolean }
      };
    }

    firstUpdated() {
      super.firstUpdated();
      installOfflineWatcher(offline => this._offlineChanged(offline));
    }

    _offlineChanged(offline) {
      const previousOffline = this._offline;
      this._offline = offline;
    }

    /* This method can be overriden in the element if a monitor of first load page is required 

    _offlineChanged(offline) {
      const previousOffline = this._offline;
      this._offline = offline;

      // Don't show the snackbar on the first load of the page.
      if (previousOffline === undefined) {
      }
    }
    */
  };
