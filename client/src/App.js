import {WebexMeetingsWidget} from '@webex/widgets';

import '@webex/widgets/dist/css/webex-widgets.css';

export default function App() {

  // This returns a component that will either display our OAuth login link or our main app if we have a token.
  return (
    <div className="WebexMeeting">
        { 
            <WebexMeetingsWidget
            accessToken="NWIyY2MwOWMtMjZjMy00YWY2LWFlMGUtODMyYTQ5OWNjOWEwMGIzOThiMTYtYjk3_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f"
            meetingDestination="Y2lzY29zcGFyazovL3VzL1JPT00vNWY5NzMyYjAtOTA4NC0xMWVjLTkxYzktMmI5YzVkZmIxYzcy"
          />
        }
    </div>
  );
}

