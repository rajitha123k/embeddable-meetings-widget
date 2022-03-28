<p align="center">
  <h2 align="center">Webex Meetings Widget with CDN link</h2>

  <p align="center">
   CDN link for <a href="https://developer.webex.com/docs/widgets#meetings-widget-"><strong>Webex Meetings Widget</strong></a> allows developers to easily include Webex meetings functionality into your application.
  </p>
  <p align="center">
  [![Meetings Widget with CDN link Video Demo](https://img.youtube.com/vi/iws4osHV42Y/0.jpg)](https://youtu.be/iws4osHV42Y, "Meetings Widget with CDN link Video Demo")
</p>
</p>

## Table of Contents

- [Usage with CDN Link](#usage-with-CDN-links)
- [Properties](#properties)
  - [Access Tokens](#access-tokens)
  - [Meeting Destinations](#meeting-destinations)
  - [Theme](#theme)
  - [Remote Video Layout](#remote-video-layout)
    - [Grid (Default)](#grid)
    - [Overlay](#overlay)
    - [Stack](#stack)
    - [Prominent](#prominent)
    - [Focus](#focus)
  - [Customize Meeting Controls](#customize-meeting-controls)
    - [Meeting Controls when In Meeting](#meeting-controls-when-in-meeting)
    - [Meeting Controls when Not Joined yet](#meeting-controls-when-not-joined-yet)
- [Share screen compatible browsers](#share-screen-compatible-browsers)
- [Contact](#contact)

## Usage with CDN Links

Using our CDN requires the least amount of work to get started. Add the following into your HTML file in the head section:

```html
<link href="https://cdn.jsdelivr.net/gh/WXSD-Sales/MeetingWidget/docs/webex-widgets.css" />
<script src="https://cdn.jsdelivr.net/gh/WXSD-Sales/MeetingWidget/docs/bundle.js"></script>
```
You can then instantiate the widget by providing the following parameters:

```html
<div id="meeting-widget"></div>

  <script>
  webexMeetingWidget({accessToken: "ACCESS_TOKEN",
      meetingDestination: "MEETING_DESTINATION",
      theme:"THEME",
      layout:"LAYOUT",
      width:"WIDTH",
      height:"HEIGHT",
      inMeetingControls:['IN_MEETING_CONTROL1','IN_MEETING_CONTROL2',...],
      interstitialControls:['NOT_JOINED_CONTROL1','NOT_JOINED_CONTROL2',...]});
  </script>
```

## Properties

### Access Tokens

See the [Accounts and Authentication](https://developer.webex.com/docs/getting-started#accounts-and-authentication) section of our developer portal for more information on how to obtain access tokens.

### Meeting Destinations

A meeting destination is virtual location where the Webex meeting takes place.
A meeting destination can be accessed via:

* SIP URIs (Webex Meetings, Personal Meeting Rooms and Webex cloud-registered devices only)
* Email address (of a Webex user)
* [People IDs](https://developer.webex.com/docs/api/v1/people)
* [Room IDs](https://developer.webex.com/docs/api/v1/rooms)

### Theme

Developers can choose how widget should look based on following themes:

* Dark theme:
  * Use `theme="dark"` as prop value in Meetings widget.
* Light theme:
  * Use `theme="light"` as prop value in Meetings widget.

And if no theme is chosen it selects the browser's theme by default.

### Remote Video Layout

Remove video from participants can be displayed in many different ways.
Developers can choose how remote video displays based on the following layouts:

#### Grid (default)

Grid layout divides remote participants in equal segments, giving visibility to a lot of speakers at the same time.

Use `layout="grid"` as prop value in Meetings widget.

#### Overlay

Overlay layout displays the active speaker prominently, while overlaying other participants in a strip at the bottom.

Use `layout="overlay"` as prop value in Meetings widget.

#### Stack

Stack layout is similar to overlay, but instead of displaying other participants in a strip at the bottom,
non-active speakers are placed on top of the active speaker.
Stacking videos gives full visibility to everyone's video.

Use `layout="stack"` as prop value in Meetings widget.

#### Prominent

Prominent layout gives focus to the active speaker and displays other participants around this participant.

Use `layout="prominent"` as prop value in Meetings widget.

#### Focus

Focus layout gives all visibility to the active speaker.
All other participants are not displayed until they speak, who then would take over as active speaker.

Use `layout="focus"` as prop value in Meetings widget.

### Layout Styles

#### Width

The minimum width is set to 700px. Any width modifications above the minimum width will be applied.

#### Height

The minimum heoght is set to 500px. Any height modifications above the minimum height will be applied.

### Customize Meeting Controls

Developers can customize the meeting controls used by the Meetings widget.
The Webex Meetings Widget takes an optional function to specify a custom list of controls for a meeting and an optional range to specify which controls can be collapsed if not enough space is available.

#### Meeting Controls when In Meeting (inMeetingControls)

  * `mute-audio`
  * `mute-video`
  * `share-screen`
  * `member-roster`
  * `settings`
  * `leave-meeting`
 
#### Meeting Controls when Not Joined yet (interstitialControls)

  * `mute-audio`
  * `mute-video`
  * `settings`
  * `join-meeting`

## Share screen compatible browsers

Due to the use of the getDisplayMedia(), screen sharing is not available on mobile browsers and on Internet Explorer browser.\
It is [available on the following browsers](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility): Chrome (v>=72), Edge (v>=79), Firefox (v>=66), Opera (v>=60), Safari (v>=13).

## Contact
Please contact us at wxsd@external.cisco.com
