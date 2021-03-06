/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* global AddonManager */

"use strict";

add_task(function* installed() {
  let addon = yield new Promise(
    (resolve) => AddonManager.getAddonByID("webcompat@mozilla.org", resolve)
  );
  isnot(addon, null, "Webcompat addon should exist");
  is(addon.name, "Web Compat");
  ok(addon.isCompatible, "Webcompat addon is compatible with Firefox");
  ok(!addon.appDisabled, "Webcompat addon is not app disabled");
  ok(addon.isActive, "Webcompat addon is active");
  is(addon.type, "extension", "Webcompat addon is type extension");
});
