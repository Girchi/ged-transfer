/**
 * @file
 *
 * Wrapper around fetch(), and access token handling operations.
 *
 * To use import getAuthClient, and initialize a client:
 * const auth = getAuthClient(optionalConfig);
 */

let sendingMessage;
let girchiWindow;

/**
 * Auth client factory.
 *
 * @param {object} config
 *
 * @returns {object}
 *   Returns an object of functions with $config injected.
 */
export function getAuthClient(config = {}) {
    const defaultConfig = {
        // Base URL of your Drupal site.
        base: process.env.REACT_APP_DRUPAL_DOMAIN,
        // Name to use when storing the token in localStorage.
        token_name: 'drupal-token',
    };
    config =  {...defaultConfig, ...config}
    
    /**
    * Delete the stored token, effectively ending the user's session.
    */
    function logout() {
        localStorage.removeItem(config.token_name);
        return Promise.resolve(true);
    };
    
    /**
    * Wrapper for fetch() that will attempt to add a Bearer token if present.
    *
    * If there's a valid token, then
    * add it to the request headers. If not, issue the request without adding an
    * Authorization header.
    *
    * @param {string} url URL to fetch.
    * @param {object} options Options for fetch().
    */
    async function fetchWithAuthentication(url, options) {
        if (!options.headers.get('Authorization')) {
            try {
                const auth_token = await token();
                if (auth_token) {
                    console.log('using token', auth_token);
                    options.headers.append('Authorization', `Bearer ${auth_token}`);
                }
            } catch (error) {
                // Safe to swallow this error. Just means we don't have a logged in
                // user.
            }
        }
    
        return fetch(`${config.base}${url}`, options);
    }
    
    /**
    * Get the current token if there is one.
    *
    * @returns {Promise}
    *   Returns a Promise that resolves to the current token, or false.
    */
    async function token() {
        const token = localStorage.getItem(config.token_name) !== null
        ? localStorage.getItem(config.token_name)
        : false;
    
        if (!token) {
            return Promise.reject('empty token');
        }
    
        return Promise.resolve(token);
    };
    
    /**
    * Check if the current user is logged in or not.
    *
    * @returns {Promise}
    */
    async function isLoggedIn() {
        try {
            const auth_token = await token();
            if (auth_token) {
                return Promise.resolve(true);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    
        return Promise.reject(false);
    };

    // custom functions for window authorization

    function eventListener() {
        window.addEventListener("message", (event) => {
            if (event.origin === config.base) {
                let drupalToken = JSON.parse(event.data).token;
                console.log(drupalToken);
                localStorage.setItem('drupal-token', drupalToken);
                girchiWindow.close();
                clearInterval(sendingMessage);
            }
        });
    }

    function login() {
        girchiWindow = window.open(config.base);
        console.log("New Window Loaded");
        sendingMessage = setInterval(() => {
            if(girchiWindow.closed) {
                clearInterval(sendingMessage);
            }
            console.log('sending message')
            girchiWindow.postMessage("Hi there from react!", '*');
        }, 1000);
    }

    function windowIsClosed() {
        return girchiWindow.closed;
    }
    
    return {eventListener, login, logout, isLoggedIn, fetchWithAuthentication, token, windowIsClosed};
}
