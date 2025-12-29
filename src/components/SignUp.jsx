import { Button, Paper, TextField, Typography, Box,IconButton,InputAdornment } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


let renderCount = 0;

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is Required")
    .matches(/^[A-Z]/, "Enter Your Full Name"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Email is Required"),
  age: Yup.number()
    .integer()
    .positive()
    .required("Enter Your Age")
    .min(18, "Age must be between 18 to 30")
    .max(30, "Age must be between 18 to 30"),
  password: Yup.string().required("Password is Required"),
  cPassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const SignUp = () => {
  renderCount++;

  const [showPassword, setShowPassword] = React.useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#2c2c2dff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        component="form"
        onSubmit={handleSubmit(handleData)}
        sx={{
          width: 420,
          p: 4,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
        }}
      >
        <Typography variant="h5" fontWeight={600} textAlign="center">
          Create Account
        </Typography>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          Render Count: {renderCount}
        </Typography>

        <TextField
          label="Full Name"
          fullWidth
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="Email Address"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Age"
          type="number"
          fullWidth
          {...register("age")}
          error={!!errors.age}
          helperText={errors.age?.message}
        />

<TextField
  label="Password"
  type={showPassword ? "text" : "password"}
  fullWidth
  {...register("password")}
  error={!!errors.password}
  helperText={errors.password?.message}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={() => setShowPassword((prev) => !prev)}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>

<TextField
  label="Confirm Password"
  type={showPassword ? "text" : "password"}
  fullWidth
  {...register("cPassword")}
  error={!!errors.cPassword}
  helperText={errors.cPassword?.message}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={() => setShowPassword((prev) => !prev)}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>


        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            mt: 1,
            py: 1.2,
            fontWeight: 600,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Sign Up
        </Button>
      </Paper>
    </Box>
  );
};

export default SignUp;
