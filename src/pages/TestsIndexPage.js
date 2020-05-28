import React, { useState, useEffect } from "react";
import { Test } from "../api/test";

export const TestIndexPage = () => {
  let [testIndex, setTestIndex] = useState({
    tests: []
  });

  useEffect(() => {
    Test.index().then(response => {
      setTestIndex({ tests: response.tests});
    })
  }, []);
  return (
    <div>
      <h1>My tests</h1>
      <ul>
        {testIndex.tests.map(test => (
          <li key={test.id} >
                {test.project_name}
          </li>
        ))}
      </ul>
    </div>
  )
};