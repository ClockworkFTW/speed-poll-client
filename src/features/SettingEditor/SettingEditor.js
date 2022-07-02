import React from "react";
import * as dateFns from "date-fns";

// Components
import { Checkbox } from "../../components/Checkbox";
import { DatePicker } from "../../components/DatePicker";

// Styles
import { Container, Column, Setting } from "./SettingEditor.style";

export const SettingEditor = ({ settings, setSettings }) => {
  const toggleSetting = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  return (
    <Container>
      <Column>
        <Setting>
          <Checkbox
            label={`Set End Date (${dateFns.format(
              settings.endDate,
              "MM/dd/yyyy p"
            )})`}
            value={settings.setEndDate}
            onChange={() => toggleSetting("setEndDate")}
          />
        </Setting>
        <Setting>
          <Checkbox
            label="Private Poll"
            value={settings.privatePoll}
            onChange={() => toggleSetting("privatePoll")}
          />
        </Setting>
        <Setting>
          <Checkbox
            label="Prevent Duplicate Voting"
            value={settings.preventDuplicateVoting}
            onChange={() => toggleSetting("preventDuplicateVoting")}
          />
        </Setting>
        <Setting>
          <Checkbox
            label="Multiple Choice"
            value={settings.multipleChoice}
            onChange={() => toggleSetting("multipleChoice")}
          />
        </Setting>
        <Setting>
          <Checkbox
            label="Add Comments"
            value={settings.addComments}
            onChange={() => toggleSetting("addComments")}
          />
        </Setting>
        <Setting>
          <Checkbox
            label="Login to Vote"
            value={settings.loginToVote}
            onChange={() => toggleSetting("loginToVote")}
          />
        </Setting>
        <Setting>
          <Checkbox
            label="Hide results"
            value={settings.hideResults}
            onChange={() => toggleSetting("hideResults")}
          />
        </Setting>
        <Setting>
          <Checkbox
            label="Enable Captcha"
            value={settings.enableCaptcha}
            onChange={() => toggleSetting("enableCaptcha")}
          />
        </Setting>
      </Column>
      <Column>
        <DatePicker
          date={settings.endDate}
          setDate={(endDate) => setSettings({ ...settings, endDate })}
        />
      </Column>
    </Container>
  );
};
