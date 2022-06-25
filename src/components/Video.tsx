import "@vime/core/themes/default.css";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";
import { useGetLessonBySlugQuery } from "../graphql/generated";


import { Button } from "./Button";
import { Card } from "./Card";

interface VideoProps {
  lessonSlug: string;
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        Carregando...
      </div>
    )
  }


  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-h-[60vh] max-w-[1100px] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <section className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>

            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={data.lesson.teacher.avatarURL}
                  alt={data.lesson.teacher.name}
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>

                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <Button icon={<DiscordLogo size={24} />} name="Comunidade no discord" variant="primary" />

            <Button icon={<Lightning size={24} />} name="Acesse o desafio" variant="secundary" />
          </div>
        </section>

        <section className="gap-8 mt-20 grid grid-cols-2">
          <Card
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
            icon={<FileArrowDown size={40} />}
            link=""
            title="Material complementar"
          />

          <Card
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            icon={<Image size={40} />}
            link=""
            title="Wallpapers exclusivos"
          />
        </section>
      </div>
    </div>
  )
}
