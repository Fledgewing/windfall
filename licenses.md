---
title: Licenses
description: Licenses for the Windfall site, its fonts and each app.
permalink: /licenses/
---
<div class="wrap narrow page-head" markdown="1">
<div class="eyebrow">Licenses</div>

# Licenses and credits

## This site
- **Code** (layouts, styles, scripts): MIT. See [LICENSE](https://github.com/{{ site.repo }}/blob/main/LICENSE).
- **Words and illustrations**: © Fledgewing, all rights reserved. See [CONTENT-LICENSE.md](https://github.com/{{ site.repo }}/blob/main/CONTENT-LICENSE.md).
- **Fonts**: [Instrument Serif](https://github.com/Instrument/instrument-serif) and [Manrope](https://github.com/googlefonts/manrope), both under the SIL Open Font License 1.1, hosted on this site. Licence texts are in [assets/fonts](https://github.com/{{ site.repo }}/tree/main/assets/fonts).

## The apps
Each app’s page lists its own licenses:
{% assign live = site.apps | where: "status", "live" | sort: "order" %}
{% for a in live %}- [{{ a.name }}]({{ a.url | relative_url }}): {{ a.license_short }}
{% endfor %}

## Trademarks
Tailscale, Home Assistant, KOReader, BookOrbit, Xteink, Omi, Safari, Chrome and Edge are trademarks of their owners. Windfall and its apps are independent and not affiliated with or endorsed by them.
</div>
