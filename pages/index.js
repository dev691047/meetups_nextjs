import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
// const DUMMY_MEETUPS = [];

export default function Home(props) {
  return (
    <div style={{ margin: "-8px" }}>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://kumardev:tmLyRs9b6PtPMSQj@cluster0.bwo6lqz.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// / we don need getserversideprops our data is  not changing frequently
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
