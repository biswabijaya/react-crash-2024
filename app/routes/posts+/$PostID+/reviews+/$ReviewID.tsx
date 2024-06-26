import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Posts | Post | Reviews | View Review" },
    { name: "description", content: "View Review" },
  ];
};

export default function Review() {
  return (
    <span className="text-3xl font-bold underline">
      ID({useParams().ReviewID})
    </span>
  );
}
