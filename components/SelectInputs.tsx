

export default function SelectInputs({ options, label, register, name, errors }:any) {
  return (
    // <div className="grid gap-3">
    //   <label htmlFor={name}>{label}</label>
    //   <Select
    //     id={name}
    //     name={name}
    //     {...register(name)}
    //   >
    //     <SelectTrigger id={name} aria-label={label}>
    //       <SelectValue placeholder={`${label}`} />
    //     </SelectTrigger>
    //     <SelectContent>
    //       {options.map((option) => (
    //         <SelectItem key={option.id} value={option.id}>{option.title}</SelectItem>
    //       ))}
    //     </SelectContent>
    //   </Select>
    // </div>
//   <div className="grid gap-3">
// <Select  {...register(name)}>
//   <SelectTrigger className="">
//   <SelectValue placeholder={`${label}`} />
//     </SelectTrigger>
//   <SelectContent>
//   {options.map((option) => (
//     <SelectItem key={option.id} value={option.id}>{option.title}</SelectItem>
//   ))}
//   </SelectContent>
// </Select>

//     </div>
<div className='grid gap-3 text-gray-200 dark:text-gray-900'>
<label
  htmlFor={name}
  className="block text-sm font-semibold leading-6 dark:text-gray-200 text-gray-900"
>
  {label}
</label>
<div className="">
  <select
    {...register(`${name}`)}
    id={name}
    name={name}
    className="block w-full rounded-md border-0 py-2 dark:text-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-3"
  >
    {options?.map((option:any, i:any) => {
      return (
        <option key={i} value={option.id}>
          {option.title}
        </option>
      );
    })}
  </select>
</div>
</div>
  );
}
