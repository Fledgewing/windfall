---
name: Orbify
title: Orbify
order: 1
status: live
category: Reading
tagline: Your book server, on every e-reader you own.
summary: Orbify keeps Android e-readers and Xteink pocket readers in sync with your BookOrbit library over your own private Tailscale network. Close the cover and it syncs, then sleeps. No cloud account and no port forwarding.
facts: [Android e-readers, Pocket e-ink firmware, Tailscale]
price: Free
license_short: Open source · MIT, AGPL and GPL parts
screen: reader
links:
  - { label: Get it, url: /apps/orbify/#get-it, primary: true }
  - { label: Source, url: "https://github.com/Fledgewing/Orbify" }
description: Keep Android e-readers and Xteink pocket readers in sync with your BookOrbit library over Tailscale.
---

<section id="get-it"><div class="wrap twin"><div markdown="0">
<h2>Get it</h2>
<p class="mute">Setup steps live with the app itself, so they’re always current.</p>
<div class="getit">
  <a href="https://github.com/Fledgewing/Orbify/blob/main/docs/SETUP.md"><b>Android e-readers</b><span>Boox and other Android readers · Setup guide ↗</span></a>
  <a href="https://github.com/Fledgewing/CrossInk-Tailnet/releases/latest"><b>Xteink pocket readers</b><span>Firmware downloads and flashing steps ↗</span></a>
  <a href="https://github.com/Fledgewing/Orbify/issues"><b>Stuck?</b><span>Ask on the app’s GitHub issues ↗</span></a>
</div>
</div><div markdown="0">
<h2>What you need</h2>
<dl class="kv">
  <dt>Server</dt><dd>A BookOrbit server you run</dd>
  <dt>Network</dt><dd>A Tailscale tailnet with the server on it</dd>
  <dt>Readers</dt><dd>Android e-readers and several Xteink pocket e-ink models</dd>
  <dt>Price</dt><dd>Free</dd>
</dl>
<h2 class="mt">Privacy</h2>
<p class="mute">Orbify sends nothing to us. It talks to your own BookOrbit server over your own tailnet, and to GitHub to download KOReader and its own updates. It has no analytics.</p>
</div></div></section>

<section><div class="wrap" markdown="0">
<h2>Licenses</h2>
<p class="mute">Orbify is several pieces, and they carry different licenses. Each folder in the source has its own LICENSE file, and firmware releases ship the full third-party notices.</p>
<div class="tbl"><table class="lic">
  <thead><tr><th>Piece</th><th>License</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Orbit Companion (Android app)</td><td>MIT</td><td>Our own code</td></tr>
    <tr><td>KOReader patch</td><td>AGPL-3.0-or-later</td><td>Extends KOReader, which is AGPL</td></tr>
    <tr><td>Xteink overlay source</td><td>MIT</td><td>Our own code</td></tr>
    <tr><td>Xteink firmware downloads</td><td>GPL-3.0-or-later</td><td>Includes wolfSSL (GPL), linked with Apache-2.0 parts</td></tr>
    <tr><td>MicroLink (bundled)</td><td>MIT</td><td>Fork of Cameron Malone’s MicroLink</td></tr>
  </tbody>
</table></div>
<p class="mute small">Built on KOReader, CrossInk-Bookorbit, MicroLink and wolfSSL. Thank you to their authors. Full notices: <a href="https://github.com/Fledgewing/CrossInk-Tailnet/blob/main/THIRD_PARTY_LICENSES.md">CrossInk-Tailnet third-party licenses</a>. Not affiliated with Tailscale, KOReader, BookOrbit or Xteink.</p>
</div></section>
