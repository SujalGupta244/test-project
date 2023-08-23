import React, { useState } from "react";
import CusBox from "./CusBox";
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  TextField,
  FormControl,
  Input,
  MenuItem,
  Select,
  InputLabel,
  Button,
  Link,
} from "@mui/material";
import { BsUpload } from "react-icons/bs";
import { PiAsteriskSimpleBold } from "react-icons/pi";

import {
  createTheme,
  alpha,
  getContrastRatio,
  ThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    violet: {
      main: alpha("#673AB7", 1),
      contrastText: getContrastRatio("#673AB7", "#fff") > 4.5 ? "#fff" : "#111",
    },
    primary:{
        main: alpha("#673AB7", 1),
        contrastText: getContrastRatio("#673AB7", "#fff") > 4.5 ? "#fff" : "#111",
    },
    info : {
        main: alpha("#000", 1),
    }
  },
});

const Form = () => {
  const [selectValues, setSelectValues] = useState(["option1", "option2", "option3"]);
  const [value, setValue] = useState("");
  const [counts, setCount] = useState([1, 2, 3, 4, 5]);
  
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(value)
    setValue("")
  }

  const handleChange = (e) =>{
    setValue(e.target.value)
  }
  
  return (
    <ThemeProvider theme={theme}>
    <form action="" onSubmit={handleSubmit}>
      <FormControl >
        <CusBox>
          <FormLabel className="flex text-black mb-3" color={"info"}>
            MCQ <PiAsteriskSimpleBold className="text-[0.5rem] text-red-600" />
          </FormLabel>
          <RadioGroup
          defaultValue="option1"
          name="radio-buttons-group"
          >
            {selectValues.map((value) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={value}
              />
            ))}
          </RadioGroup>
        </CusBox>

        <CusBox>
          <FormLabel className="flex text-black mb-3" color={"info"}>
            Checkbox <PiAsteriskSimpleBold className="text-[0.5rem] text-red-600" />
          </FormLabel>
          <FormGroup>
            {selectValues.map((value) => (
              <FormControlLabel key={value} control={<Checkbox />} label={value} />
            ))}
          </FormGroup>
        </CusBox>

        <CusBox>
          <FormLabel className="flex text-black mb-3" color={"info"}>
            Short Answer
            <PiAsteriskSimpleBold className="text-[0.5rem] text-red-600" />
          </FormLabel>
          <Input placeholder="Your answer" />
        </CusBox>

        <CusBox>
          <FormLabel className="flex text-black mb-3" color={"info"}>
            ParaGraph <PiAsteriskSimpleBold className="text-[0.5rem] text-red-600" />
          </FormLabel>
          <Input placeholder="Your answer" />
        </CusBox>

        <CusBox>
          <FormLabel className="flex text-black mb-3" color={"info"}>
            Drop down <PiAsteriskSimpleBold className="text-[0.5rem] text-red-600" />
          </FormLabel>
          <Select
            className="w-36"
            value={value}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {selectValues.map((value) => (
              <MenuItem key={value} value={value}>{value}</MenuItem>
            ))}
          </Select>
        </CusBox>

        <CusBox>
          <FormLabel className="flex text-black mb-3" color={"info"}>
            File Upload
            <PiAsteriskSimpleBold className="text-[0.5rem] text-red-600" />
          </FormLabel>
          <Button
            variant="outlined"
            component="label"
            className="w-28 flex border items-center justify-between"
          >
            <BsUpload className="h-3 w-3" />
            &nbsp;
            Add file
            <input type="file" hidden />
          </Button>
        </CusBox>

        <CusBox>
          <FormLabel className="flex text-black mb-3" color={"info"}>
            Linear Scale
            <PiAsteriskSimpleBold className="text-[0.5rem] text-red-600" />
          </FormLabel>
          <div className="lg:flex items-end justify-center py-6">
            <h4 className="mr-6">Worst</h4>
            <RadioGroup
              row
              defaultValue="1"
              name="radio-buttons-group"
            >
              {counts.map((value) => (
                <FormControlLabel
                    key={value}
                  value={value}
                  control={<Radio />}
                  label={value}
                  labelPlacement={"top"}
                />
              ))}
            </RadioGroup>
            <h4 className="ml-6">Best</h4>
          </div>
        </CusBox>

        <CusBox>
          <FormLabel className="flex text-black mb-3" color={"info"}>
            Multi choice Grid
            <PiAsteriskSimpleBold className="text-[0.5rem] text-red-600" />
          </FormLabel>
          <div className="flex items-center justify-end mr-10 mb-4">
            <h4 className="mx-6">Column 1</h4>
            <h4 className="mx-6">Column 2</h4>
            <h4 className="mx-6">Column 3</h4>
          </div>
          <div className="flex items-center justify-between mr-6 bg-gray-50 p-2 rounded-sm">
            <h4>Row 1</h4>
            <RadioGroup
              row
              onChange={handleChange}
            >
              {selectValues.map((value) => (
                <div className="mx-10" key={value}>
                    <Radio value={value}/>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="flex items-center justify-between mr-6 bg-gray-50 px-2 py-1 rounded-sm mt-1">
            <h4>Row 2</h4>
            <RadioGroup
              row
            >
              {selectValues.map((value) => (
                <div className="mx-10" key={value}>
                    <Radio value={value} />
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="flex items-center justify-between mr-6 bg-gray-50 px-2 py-1 rounded-sm mt-1">
            <h4>Row 3</h4>
            <RadioGroup
              row
              defaultValue="option1"
              name="radio-buttons-group"
            >
              {selectValues.map((value) => (
                <div className="mx-10" key={value}>
                    <Radio value={value}/>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CusBox>

        <CusBox>
          <FormLabel className="flex text-black mb-3" color={"info"}>
            Tick box Grid
            <PiAsteriskSimpleBold className="text-[0.5rem] text-red-600" />
          </FormLabel>
          <div className="flex items-center justify-end mr-10 mb-4">
            <h4 className="mx-6">Column 1</h4>
            <h4 className="mx-6">Column 2</h4>
            <h4 className="mx-6">Column 3</h4>
          </div>
          <div className="flex items-center justify-between mr-6 bg-gray-50 p-2 rounded-sm mt-1">
            <h4>Row</h4>
            <FormGroup row onChange={handleChange}>
              {selectValues.map((value) => (
                <div className="mx-10" key={value}>
                    <Checkbox value={value}/>
                </div>
              ))}
            </FormGroup>
          </div>
          <div className="flex items-center justify-between mr-6 bg-gray-50 p-2 rounded-sm mt-1">
            <h4>Row</h4>
            <FormGroup row onChange={handleChange}>
              {selectValues.map((value) => (
                <div className="mx-10" key={value}>
                    <Checkbox value={value}/>
                </div>
              ))}
            </FormGroup>
          </div>
          <div className="flex items-center justify-between mr-6 bg-gray-50 p-2 rounded-sm mt-1">
            <h4>Row</h4>
            <FormGroup row onChange={handleChange}>
              {selectValues.map((value) => (
                <div className="mx-10" key={value}>
                    <Checkbox value={value}/>
                </div>
              ))}
            </FormGroup>
          </div>
        </CusBox>
        <div className="flex items-center justify-between">
          <Button
            variant="contained"
            size="medium"
            color={"violet"}
            className="w-32"
            type="submit"
          >
            Submit
          </Button>
          <div className="flex items-center">
            <div className="w-48 h-2.5 bg-green-600 rounded-md" />
            &nbsp;
            <p>Page 1 of 1</p>
          </div>
          <h4 className="text-[#673AB7]">Clear Form</h4>
        </div>
        <p className="text-xs mt-6 mb-2">
          Never submit passwords through Google Forms.
        </p>
        <div className="flex text-xs justify-center">
          <p>This content is neither created nor endorsed by Google.</p>
          &nbsp;
          <div className="flex">
            <Link
              // color="gray"
              className="text-gray-400"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Report Abuse
            </Link>
            &nbsp; - &nbsp;
            <Link
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Terms of Service
            </Link>
            &nbsp; - &nbsp;
            <Link
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </FormControl>
      </form>
    </ThemeProvider>
  );
};

export default Form;
