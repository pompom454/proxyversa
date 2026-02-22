# ProxyVersa
This is a very simple way to prevent proxies and/or unblocker tools from being used. This is a Chrome extension to be used with Chromium-based browsers.

## How does it work?
This simply tracks how long the user is on about:blank. The default value is 15000 ms (or 15 seconds) but you can change it inside the JavaScript file. After the value threshold has been passed, it will close that tab. No user should be on about:blank for that long.

## How did you get the idea and name?
After noticing how the concept of "browser-in-a-browser" worked, I figured that (for fun, but also because IT departments have inadequate methods of blocking) maybe I can make a way to prevent kiddies in school from using tools like Interstellar or Classroom 6x. And thus, ProxyVersa was born. For the name, I thought maybe the combination of the word "proxy" and the phrase "vice versa" would work together well.

## How do I install this?
Simply download the code by pressing the green "Code" button and pressing "Download ZIP". Alternatively, use Git by copying the URL, pasting it into your command line, and then adding ".git" to the end of the URL. It should look like this:
```
git https://github.com/pompom454/proxyversa.git
```
After that, use Chrome dev tools (or just go to extensions) and load the extension.
