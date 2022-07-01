import React from "react";
import CountUp from "react-countup";

// Hooks
import { usePrevious } from "../../../hooks";

// Components
import { Icon } from "../../../components/Icon";

// Styles
import { Container, Button } from "./Controls.style";

export const Controls = (props) => {
  const { pollCount, sorting, setSorting, filtered, setFiltered } = props;

  const prevPollCount = usePrevious(pollCount);

  return (
    <Container>
      <h3>
        <CountUp
          start={prevPollCount}
          end={pollCount}
          duration={1}
          suffix=" Polls"
        />
      </h3>
      <div>
        <Button
          active={sorting === "Recent"}
          onClick={() => setSorting("Recent")}
        >
          <Icon icon={["fas", "clock"]} style={{ marginRight: "6px" }} />
          Recent
        </Button>
        <Button
          active={sorting === "Votes"}
          onClick={() => setSorting("Votes")}
        >
          <Icon icon={["fas", "circle-check"]} style={{ marginRight: "6px" }} />
          Votes
        </Button>
        <Button
          active={sorting === "Views"}
          onClick={() => setSorting("Views")}
        >
          <Icon icon={["fas", "eye"]} style={{ marginRight: "6px" }} />
          Views
        </Button>
        <Button active={filtered} onClick={() => setFiltered(!filtered)}>
          <Icon
            icon={["fas", filtered ? "signal-stream" : "bars-filter"]}
            style={{ marginRight: "6px" }}
          />
          {filtered ? "Live" : "All"}
        </Button>
      </div>
    </Container>
  );
};
