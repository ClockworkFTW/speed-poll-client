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
    <Wrapper>
      <Container>
        <Checkbox
          label="Private (only via direct link)"
          value={settings.isPrivate}
          onChange={() => toggleSetting("isPrivate")}
        />
        <Checkbox
          label="Allow multiple votes"
          value={settings.multipleVotes}
          onChange={() => toggleSetting("multipleVotes")}
        />
        <Checkbox
          label="Enable Comments"
          value={settings.enableComments}
          onChange={() => toggleSetting("enableComments")}
        />
        <Checkbox
          label="Require participants name"
          value={settings.requireAccount}
          onChange={() => toggleSetting("requireAccount")}
        />
        <Checkbox
          label="Hide results"
          value={settings.hideResults}
          onChange={() => toggleSetting("hideResults")}
        />
        <Checkbox
          label={`Set end date (${dateFns.format(
            settings.endDate,
            "dd MMM YYY p"
          )})`}
          value={settings.setEndDate}
          onChange={() => toggleSetting("setEndDate")}
        />
      </Container>
      <DatePicker
        endDate={settings.endDate}
        setEndDate={(endDate) => setSettings({ ...settings, endDate })}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  flex-grow: 1;
  margin-right: 24px;
`;

export default Settings;
