import { format, formatISO } from "date-fns";

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span>{format(date, "LLLL d, yyyy")}</span>
      <style jsx>
        {`
          span {
            color: #a5a5a5;
            font-weight: 200;
          }
        `}
      </style>
    </time>
  );
}
