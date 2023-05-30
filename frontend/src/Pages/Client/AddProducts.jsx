import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { PostForm } from "../../schema/PostForm";
import axios from "axios";
import { Link } from "react-router-dom";

const AddProducts = () => {
    


    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(PostForm),
      });

      const postData = async () => {
        const values = getValues();
        await axios.post("http://localhost:8080/users", {
          image: values.image,
          country: values.country,
          title: values.title,
          paragraph: values.paragraph,
        });
      };





  return (
    <div>
      <div className="container">
        <form className="form" action="" onSubmit={handleSubmit()}>
          <FormControl>
            <FormLabel>image</FormLabel>
            <Input type="text" {...register("image")}/>
            <FormLabel>country</FormLabel>
            <Input type="text" {...register("country")}/>
            <FormLabel>title</FormLabel>
            <Input type="text" {...register("title")}/>
            <FormLabel>paragraph</FormLabel>
            <Input type="text" {...register("paragraph")}/>
          </FormControl>
          <br />
          <Button onClick={() => postData()} colorScheme="blue">Post</Button>
        </form>
        <br />
      <Link to={"/"}>Go Home</Link>
      </div>

    </div>
  );
};

export default AddProducts;
