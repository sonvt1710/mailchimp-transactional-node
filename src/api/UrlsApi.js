var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Add tracking domains
   * Add a tracking domain to your account.
   */
  this.addTrackingDomain = function (body) {
    return this.apiClient.post('/urls/add-tracking-domain', body);
  };

  /**
   * Check cname settings
   * Checks the CNAME settings for a tracking domain. The domain must have been added already with the add-tracking-domain call.
   */
  this.checkTrackingDomain = function (body) {
    return this.apiClient.post('/urls/check-tracking-domain', body);
  };

  /**
   * Delete tracking domain
   * Deletes an unverified tracking domain from your account. Valid tracking domains cannot be deleted via API and require login confirmation.
   */
  this.deleteTrackingDomain = function (body) {
    return this.apiClient.post('/urls/delete-tracking-domain', body);
  };

  /**
   * List tracking domains
   * Get the list of tracking domains set up for this account.
   */
  this.trackingDomains = function (body) {
    return this.apiClient.post('/urls/tracking-domains', body);
  };

};
