import React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';


export default function TextInputs({ label, name, register, errors, type  ,IsRequired = true }:any) {
  return (
    <div className="grid gap-3">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        className="w-full"
        {...register(name, { required: IsRequired })}
        defaultValue=""
        placeholder={`${label}`} 
      />
           {errors[`${name}`] && <span className='text-red-500 text-xs font-semibold'>{label} is required</span>}
    </div>
  );
}
