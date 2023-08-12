// add option field is duplicating

// remove comments
// save  section is duplicate the fields also

import React, { useState } from "react";
import FormBuilder from "./FormBuilder";
import FormPreview from "./FormPreview";

const App = () => {
  return (
    <div>
      <FormBuilder />
      <hr />
      <hr />
      <hr />
      <FormPreview />
    </div>
  );
};

export default App;
