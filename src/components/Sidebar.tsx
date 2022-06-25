import { useQuery } from "@apollo/client";
import { useGetLessonsQueryQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SiderBarProps {
  linkSlug: string | undefined;
}

export function Sidebar({ linkSlug }: SiderBarProps) {
  const { data } = useGetLessonsQueryQuery();

  if (!data) {
    return (
      <div className="flex-1">
        Carregando...
      </div>
    )
  }

  return (
    <aside className="hidden lg:block w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              linkSlug={linkSlug}
              key={lesson.id}
              availableAt={new Date(lesson.availableAt)}
              slug={lesson.slug}
              title={lesson.title}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
