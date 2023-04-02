import { UseFormRegister, FieldValues } from 'react-hook-form';

interface GroupProps {
  /** Name of group. */
  title: string;
  /** Option description detailing the group. */
  subtitle?: string;
  /** Input fields in the same group. */
  children: React.ReactNode | React.ReactNode[];
}

/** Group of input fields. */
export const Group = ({ title, subtitle, children }: GroupProps) => (
  <div className="flex flex-col gap-3 sm:p-6 bg-purple rounded-3xl p-4 sm:bg-secondary sm:rounded-xl sm:shadow-md">
    <h4 className="mt-0 font-semibold text-white">{title}</h4>
    {subtitle && <p className="m-0 text-base">{subtitle}</p>}
    {children}
  </div>
);

interface InputProps {
  type: string;
  defaultValue?: string;
  label: string;
  variable: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  errors: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
  onChange?: () => void;
}

export const Input = ({
  type,
  defaultValue,
  label,
  variable,
  register,
  required,
  errors,
  onChange
}: InputProps) => (
  <div>
    <label className="font-semibold text-white">
      {label}
      {!required && <span className="text-lightPurple"> (optional)</span>}
    </label>
    {type === 'file' && (
      <p className="m-0 mb-1 text-sm italic text-lightPurple">
        Will be used for recruiting purposes.
      </p>
    )}
    <input
      type={type}
      defaultValue={defaultValue}
      {...register(variable, { required })}
      className={
        'w-full rounded-lg focus:border-highlight focus:outline-none focus:ring-highlight file:px-4 file:py-1.5 file:rounded-full file:border-0 file:bg-highlight file:text-sm file:font-semibold file:cursor-pointer hover:cursor-pointer' +
        (type === 'date' ? 'py-1.5 ' : 'py-1 ') +
        (type === 'file' ? ' text-white ' : 'bg-secondary px-2 border-2 ') +
        (errors[variable] ? 'border-red-500' : 'border-highlight')
      }
      onChange={onChange}
    />
  </div>
);

interface SelectProps {
  label: string;
  variable: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  options: string[];
  errors: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
}

export const Select = ({
  label,
  variable,
  register,
  required,
  options,
  errors
}: SelectProps) => (
  <div>
    <label className="font-semibold text-highlight text-white">{label}</label>
    <select
      {...register(variable, { required })}
      className={
        'w-full px-2 py-1.5 rounded-xl border-2 focus:border-highlight focus:outline-none focus:ring-highlight bg-secondary overflow-ellipsis ' +
        (errors[variable] ? 'border-red-500' : 'border-highlight')
      }
    >
      <option
        className="overflow-hidden truncate w-px"
        value=""
        disabled
        selected
        hidden
      >
        Select {label.toLowerCase()}...
      </option>
      {options.map((option: string) => (
        <option
          key={option}
          value={option}
          className="whitespace-normal w-full"
        >
          {option.substring(0, 70)} {option.length > 70 && '...'}
        </option>
      ))}
    </select>
  </div>
);

interface RadioProps {
  label: string;
  variable: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  options: string[];
  errors: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
  direction?: 'row' | 'col';
  subtext?: string | React.ReactNode;
}

export const Radio = ({
  register,
  label,
  variable,
  required,
  options,
  errors,
  direction,
  subtext
}: RadioProps) => (
  <div>
    <legend className="font-semibold text-white">{label}</legend>
    {subtext && <p className="m-0 mb-1 text-sm italic text-gray">{subtext}</p>}
    <div
      className={
        direction === 'row'
          ? 'flex flex-col sm:flex-row gap-3 sm:gap-6 pl-2 '
          : 'flex flex-col gap-3 pl-2'
      }
    >
      {options.map((option: string) => (
        <div key={option} id={label} className="flex items-center gap-2">
          <input
            type="radio"
            id={variable.toString() + option.toString()}
            value={option}
            {...register(variable, { required })}
            className={
              'border-2 bg-secondary focus:ring-highlight focus:checked:bg-highlight hover:checked:bg-highlight checked:ring-highlight checked:bg-highlight cursor-pointer ' +
              (errors[variable] ? 'border-red-500' : 'border-highlight')
            }
          />
          <label
            htmlFor={variable.toString() + option.toString()}
            className={
              'text-white cursor-pointer ' +
              (errors[variable] ? 'text-red-500' : '')
            }
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  </div>
);

Radio.defaultProps = {
  direction: 'row',
  subtext: null
};

interface CheckboxProps {
  label: string;
  variable: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  options: string[] | React.ReactNode[];
  errors: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
  subtext?: string | React.ReactNode;
}

export const Checkbox = ({
  register,
  label,
  variable,
  required,
  options,
  errors,
  subtext
}: CheckboxProps) => (
  <div>
    <legend className="font-semibold text-white">{label}</legend>
    {subtext && <p className="m-0 mb-1 text-sm italic text-gray">{subtext}</p>}
    <div className="flex flex-col gap-2 pl-2">
      {options.map((option: string) => (
        <div key={option} id={label} className="flex gap-2">
          <input
            type="checkbox"
            id={variable.toString() + option.toString()}
            value={option}
            {...register(variable, { required })}
            className={
              'mt-1 bg-secondary border-2 focus:ring-highlight focus:checked:bg-highlight hover:checked:bg-highlight checked:ring-highlight checked:bg-highlight cursor-pointer  ' +
              (errors[variable] ? 'border-red-500' : 'border-highlight')
            }
          />
          <label
            htmlFor={variable.toString() + option.toString()}
            className="cursor-pointer text-white"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  </div>
);
