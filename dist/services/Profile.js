"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const request_1 = require("../core/request");
class Profile {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Fetch user profile
     * Get the user profile details
     * @returns user Success
     * @throws ApiError
     */
    profile() {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/profile",
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
exports.Profile = Profile;
//# sourceMappingURL=Profile.js.map