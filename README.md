# Node.js + Express Login Example

This example shows how to add Login to a Node.js application.

**Prerequisites:** 

* [Node 12](https://nodejs.org/)+

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Help](#help)
* [Links](#links)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/ProjectBackupRahul/oktaNodeApp.git
cd oktaNodeApp
npm install
```

This will get a copy of the project locally. 

### Create a Free Okta Developer Account

If you don't have one, [create an Okta Developer account](https://developer.okta.com/signup/). After you've completed the setup process, log in to your account.

Create a new OIDC app by navigating to **Applications** > **Add Application** > select **Web**, and click **Next**. Fill in the following values:

* Name: `oktaNodeApp`
* Base URI: `http://localhost:3000`
* Login redirect URI: `http://localhost:3000/callback`
* Logout redirect URI: `http://localhost:3000`

### Start the application

Start your application:

```
npm start
```

Log in to `http://localhost:3000` and enjoy your login experience!

## Links

This example uses the following libraries provided by Okta:

* [OktaDev Schematics](https://github.com/oktadeveloper/schematics#readme)
* [OIDC Middleware](https://github.com/okta/okta-oidc-js/tree/master/packages/oidc-middleware)

## Help

Please post any questions as issues in this repo, or visit our [Okta Developer Forums](https://devforum.okta.com/). 

## License

Apache 2.0, see [LICENSE](LICENSE).