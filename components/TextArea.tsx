import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function TextAreas({ errors, label, description, register , IsRequired=true }:any) {
  return (
    <div className="grid gap-3">
      <Label htmlFor={description}>{label}</Label>
      <Textarea
        id={description}
        {...register(description, { required: IsRequired })}
        defaultValue=""
        placeholder={`${label}`} 
        className="min-h-32"
      />
        {errors[`${description}`] && <span className='text-red-500 font-semibold text-xs'>{label} is required</span>}
    </div>
  );
}
