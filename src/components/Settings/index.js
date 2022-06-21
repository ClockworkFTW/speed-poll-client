import React from "react";
import * as dateFns from "date-fns";
import styled from "styled-components";

import Checkbox from "./Checkbox";
import DatePicker from "./DatePicker";

const Settings = ({ settings, setSettings }) => {
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
            value={settings.isPrivate}
            onChange={() => toggleSetting("isPrivate")}
          />
        </Setting>
        <Setting>
          <Checkbox
            label="Allow Multiple Votes"
            value={settings.multipleVotes}
            onChange={() => toggleSetting("multipleVotes")}
          />
        </Setting>
        <Setting>
          <Checkbox
            label="Add Comments"
            value={settings.enableComments}
            onChange={() => toggleSetting("enableComments")}
          />
        </Setting>
        <Setting>
          <Checkbox
            label="Login to Vote"
            value={settings.requireAccount}
            onChange={() => toggleSetting("requireAccount")}
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
            value={settings.hideResults}
            onChange={() => toggleSetting("hideResults")}
          />
        </Setting>
      </Column>
      <Column>
        <DatePicker
          endDate={settings.endDate}
          setEndDate={(endDate) => setSettings({ ...settings, endDate })}
        />
      </Column>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const Column = styled.div`
  :after {
    content: "";
    display: block;
    clear: both;
  }
`;

const Setting = styled.div`
  float: left;
  margin: 0px 12px 12px 0px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
`;

export default Settings;
