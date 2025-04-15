import React, { useState } from "react";
import "./git.css";
import axios from "./axios";
import { useQuery } from "@tanstack/react-query";
const GitHubStats = () => {
  const [input, setInput] = useState("");
  const [payload, setPayload] = useState("");

  const getdata = async () => {
    const response = await axios.get(`${payload}`);
    return response.data;
  };

  const { data } = useQuery({
    queryKey: [payload],
    queryFn: () => getdata(),
  });

  const handlesubmit = () => {
    setPayload(input);
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        style={{
          cursor: "pointer",
        }}
        onClick={handlesubmit}
      >
        Generate
      </button>
      <div>
        {data && (
          <div>
            <div>{data.name}</div>
            <div>{data?.company}</div>

            <div>{data?.public_repos}</div>
            <div>
              <img src={data?.avatar_url} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubStats;
