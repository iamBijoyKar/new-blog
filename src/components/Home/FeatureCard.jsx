// import React from "react";
import PropTypes from "prop-types";
import {AiFillCaretRight} from 'react-icons/ai'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button
} from "@material-tailwind/react";

FeatureCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

function FeatureCard({ title, description, image}) {
  return (
    <Card className="max-w-[22rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={image}
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody className="p-4">
        <Typography variant="h5" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <Button color="indigo" variant="filled" className="flex items-center" >
          <Typography className="font-normal capitalize">Get Started</Typography>
          <AiFillCaretRight className="ml-2 text-xl" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default FeatureCard;
