import classNames from 'classnames'
import { isPast } from 'date-fns'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { UpperCaseFirst } from '../utils/capitalize'
import { DateFormatBRL } from '../utils/date'

interface LessonProps {
  availableAt: Date;
  linkSlug: string | undefined;
  slug: string;
  title: string;
  type: 'live' | 'class';
}

export function Lesson({ availableAt, linkSlug, slug, title, type }: LessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = DateFormatBRL(availableAt);

  const isActiveLesson = linkSlug === slug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">
        {UpperCaseFirst(availableDateFormatted)}
      </span>

      <div className={classNames("rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500", {
        'bg-green-500': isActiveLesson,
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames("text-sm text-blue-500 font-medium flex items-center gap-2", {
              'text-white': isActiveLesson
            })}>
              <CheckCircle size={20} />

              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />

              Em breve
            </span>
          )}

          <span className={classNames("text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold", {
            'border-white': isActiveLesson
          })
          }>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={classNames("text-gray-200 mt-5 block", {
          'text-white': isActiveLesson
        })
        }>
          {title}
        </strong>
      </div>
    </Link>
  )
}
