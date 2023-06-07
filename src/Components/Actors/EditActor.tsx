import ActorForm from "./ActorForm";

const EditActor = () => {
  return (
    <div>
      <h3>EditActor</h3>
      <ActorForm
        model={{
          name: "Tom Holland",
          dateOfBirth: new Date("1996-06-01T00:00:00"),
          biography: `# Tom Holland
1. Known for Spiderman
2. IronMans Successor
          `,
          pictureURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/330px-Tom_Holland_by_Gage_Skidmore.jpg",
        }}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
};

export default EditActor;
