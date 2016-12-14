







            <ul class="arrivals-list" data-bind="foreach: arrivals">
                <li class="item">
                    <span class="title" data-bind="html: title"></span>
                </li>
            </ul>



Und JS, das das befüllt (und auf Status!==200 reagieren kann).



## Schritt 1: Appiness

A web app manifest file is a simple JSON file that follows the W3C’s specification.

<link rel="manifest" href="./manifest.json">

{
  "short_name": "Kinlan's Amaze App",
  "name": "Kinlan's Amazing Application ++",
  "icons": [
    {
      "src": "launcher-icon-3x.png",
      "sizes": "144x144",
      "type": "image/png"
    }
  ],
  "start_url": "index.html",
  "display": "standalone"
}


--> löst ein "WebApp Install Banner" aus (https, service worker, visited twice)

--> Lässt sich im Web Inspektor testen (Application-Tab)


## Schritt 2: Offline-Modus

> All of this is possible through service workers, which are event-driven scripts (written in JavaScript) that have access to domain-wide events, including network fetches. With them, we can cache all static resources, which could drastically reduce network requests and improve performance considerably, too.
> 
> Service workers are like other web workers in that they run in a separate thread, but they are not tied to any specific tab. They are assigned a URL scope when they are created, and they can intercept and rewrite any requests in this scope. If your service worker sits at http://example.com/my-site/sw.js, it will be able to intercept any requests made to /my-site/ or lower but cannot be made to intercept requests to the root http://example.com/.

Man cacht offline-Dateien während der Installationspahse. (Jetzt im simpelsten Fall.)

Man registriert einen ServiceWorker, der auf den Event window.online / window.offline Events reagiert.



## Aber es gbt Nachteile, die wir nicht haben wollen!

- Installations-Banner
- Inhalt durch App rendern



### Installations-Banner
Stattdessen "zum Startbildschirm hinzufügen"


- https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/
- https://www.smashingmagazine.com/2016/09/the-building-blocks-of-progressive-web-apps/
- https://www.smashingmagazine.com/2016/12/progressive-web-amps/
- https://ada.is/blog/2016/06/01/yet-another-progressive-webapp-post/



# Browser-Support

Service workers and Cache API
Supported in Chrome, Firefox, Opera and Samsung’s browser. In development in Microsoft Edge, expected to be available by the end of 2016. Under consideration for Safari.

Add to home screen
Supported in Chrome, Firefox, Opera, Android Browser and Samsung’s browser. Microsoft seems to indicate that progressive web apps will be available as store listings. No plans for Safari as of yet.

Push API
Mostly supported in Chrome, Firefox, Opera and Samsung’s browser. In development in Microsoft Edge. No plans for Safari as of yet.


## One more thing ... Tracking verbessern

https://github.com/GoogleChrome/sw-helpers/tree/master/packages/sw-offline-google-analytics



# Wie weiter?

- Web Push Notifications https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/

- Install-Banner https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android

Guardian offline: https://www.smashingmagazine.com/wp-content//uploads/2016/08/the-guardian-opt.jpg

Goodbye, Dino! https://d13yacurqjgara.cloudfront.net/users/21258/screenshots/1280869/t-rex_1x.png


Prototypen:
- manifest.json
- sw.js (Offline-Message)
- Offline-Content
- Preloading 3 Top Artikel (nur-Text) und diese dann Offline ermöglichen.
- 

Alles im Safari ansehen ... gibts Probleme? Lädt etwas langsamer?


Demo: https://incredibleweb.github.io/pwa-tutorial/
Code: https://github.com/IncredibleWeb/pwa-tutorial

Fragen: 
- wo und wie lange lebt der Event?
- Kann man nur das Offline-Zeugs nutzen, ohne sich in alle Requests reinzuhängen? Also nur in den Home-Request sowie alle anderen?
