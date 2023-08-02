import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup1",
    image:
      "https://njbmagazine.com/wp-content/uploads/2019/11/MeetingPlaces-Crystal-Springs-Outdoor-view.jpg",
    address: "some address 5,1234 some city",
    description: "this is first meetup",
  },
  {
    id: "m2",
    title: "A first meetup2",
    image:
      "https://njbmagazine.com/wp-content/uploads/2019/11/MeetingPlaces-Crystal-Springs-Outdoor-view.jpg",
    address: "some address 5,1234 some city",
    description: "this is first meetup",
  },
  {
    id: "m3",
    title: "A first meetup3",
    image:
      "https://njbmagazine.com/wp-content/uploads/2019/11/MeetingPlaces-Crystal-Springs-Outdoor-view.jpg",
    address: "some address 5,1234 some city",
    description: "this is first meetup",
  },
  {
    id: "m4",
    title: "A first meetup4",
    image:
      "https://njbmagazine.com/wp-content/uploads/2019/11/MeetingPlaces-Crystal-Springs-Outdoor-view.jpg",
    address: "some address 5,1234 some city",
    description: "this is first meetup",
  },
];

export default function Home(props) {
  return (
    <div style={{ margin: "-8px" }}>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

// we don need getserversideprops our data is  not changing frequently
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
