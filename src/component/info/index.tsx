type MoreInfoProps = {
  icon: React.ReactElement;
  title: string;
  value: string;
  unit: string;
  description: string;
};
export const MoreInfo = (props: MoreInfoProps) => {
  return (
    <div className="p-5 rounded-2xl bg-linear-gradient-1 text-white border border-primary min-h-40">
      <div className="flex gap-2 text-gray-500">
        {props.icon}
        <p className="my-auto font-semibold text-sm">{props.title}</p>
      </div>
      <div className="my-2">
        <p className="text-4xl">
          {props.value}
          <span className="text-sm ml-1">{props.unit}</span>
        </p>

        <p className="text-xs mt-5">{props.description}</p>
      </div>
    </div>
  );
};
