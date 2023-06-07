import ActorForm from "./ActorForm";

const CreateActor = () => {
  return (
    <div>
      <h3>Create Actor</h3>
      <ActorForm
        model={{ name: "", dateOfBirth: undefined }}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
};

export default CreateActor;
