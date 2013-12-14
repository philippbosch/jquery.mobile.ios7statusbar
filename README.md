jquery.mobile.ios7statusbar
===========================

A [jQuery Mobile](http://jquerymobile.com/) plugin that makes your app look more like a native iOS7 app.


Installation
------------

1. Download the [latest release](https://github.com/philippbosch/jquery.mobile.ios7statusbar/releases).
2. Unzip.
3. Copy `jquery.mobile.ios7statusbar.js` to your project's JavaScript directory.
4. Copy `jquery.mobile.ios7statusbar.css` to your project's CSS directory.
4. Include the files in your HTML code, like so:

```html
<script src="js/jquery.min.js"></script>
<script src="js/jquery.mobile.min.js"></script>
<script src="js/jquery.mobile.ios7statusbar.js"></script>
<link rel="stylesheet" href="css/jquery.mobile.ios7statusbar.css">
```


Basic Usage
-----------

In order to make the plugin do its work, your app needs to lines of HTML in the `<head>` section:

```html
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

Now, when you add your app to the homescreen and launch it from there, you should see a nice header that extends under the status bar.


License
-------

[MIT](http://philippbosch.mit-license.org/)
