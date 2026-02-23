# ProxyVersa
This is a relatively simple (and easy-to-setup) way to prevent "browser-in-a-browser" proxies and/or unblocker tools from being used. This is an extension designed for Chromium-based browsers.

## Some features!
- No servers needed to function
- Only ___ONE___ permission (access to tabs)
- No data collection
- Configurable timeout inside JS
- Small filesize
- Perfect for controlled environments
- Works on Chromium-based browsers and environments

## How does it work?
This simply tracks how long the user is on about:blank. The default value is 15000 ms (or 15 seconds) but you can change it inside the JavaScript file. After the value threshold has been passed, it will close that tab. Most tabs aren't on about:blank for that long.

## How did you get the idea and name?
After noticing how the concept of "browser-in-a-browser" worked, I figured that (for fun, but also because IT departments have stricter (but understandable) methods of blocking) maybe I can make a way to prevent students in school from using tools like Interstellar or Classroom 6x, which are big abusers of this exploit. And thus, ProxyVersa was born. For the name, I thought maybe the combination of the word "proxy" and the phrase "vice versa" would work together well.

## How do I install this?
Simply download the code by pressing the green "Code" button and pressing "Download ZIP". Alternatively, use Git by copying the URL, pasting it into your command line, and then adding ".git" to the end of the URL. It should look like this:
```
git clone https://github.com/pompom454/proxyversa.git
```
After that, use Chrome dev tools (or just go to extensions) and load the extension unpacked.

## Wait, it's that small?!
___Yes!___ It's meant to be a tiny tool, and cuts most of the bloat school monitoring tools like Linewize, GoGuardian, and Securly have. Check the JavaScript file. It will be apparent.

## So...what's the license?
This project is licensed under the MIT license. Just include the license in your software and we are (legally) on good terms.
