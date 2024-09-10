import { ExerciseContent } from "@/app/workout/page";

const ExerciseItem = ({ id, weight, reps, comment }: ExerciseContent) => {
  return (
    <p>
      {id}. {weight}kg x {reps} <i>{comment}</i>
    </p>
  );
};

export default ExerciseItem;
