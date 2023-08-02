import { useRouter } from "next/router";
import React from "react";
import MeetupDetail from "../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  const router = useRouter();
  const Id = router.query;
  return <MeetupDetail id={Id} />;
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
      {
        params: {
          meetupId: "m4",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params;
  //   console.log(meetupId);
  return {
    props: {
      meetupData: {
        image: "",
        id: meetupId,
        title: "",
        address: "",
        description: "",
      },
    },
  };
}

export default MeetupDetails;
