import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { fetchSinglePokemon } from '../../src/api/pokemon';
import { allTypes, calculateEffectiveness } from '../../src/api/pokemon_type';
import PokemonAbout from '../../src/components/pokemon/PokemonAbout';
import { IPokemon } from '../../src/types/pokemon';
import PokemonImage from '../../src/components/pokemon/PokemonImage';
import PokemonStat from '../../src/components/pokemon/PokemonStat';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';
import Spinner from '../../src/components/spinner/Spinner';
import TypeChart from '../../src/components/pokemon/TypeChart';
import styles from '../../styles/PokemonDetail.module.css';

type Props = {
  pokemon: IPokemon;
  prevPokemon: IPokemon | null;
  nextPokemon: IPokemon | null;
  typeEff: { [key: string]: number };
};

const PokemonDetailPage = ({
  pokemon,
  prevPokemon,
  nextPokemon,
  typeEff
}: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Loading</title>
        </Head>
        <div className="flex flex-col items-center py-8 gap-2">
          <Spinner />
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex">
          {prevPokemon !== null && (
            <Link href={`/pokemon/${prevPokemon.id}`} passHref>
              <a className={`${styles.link} mr-auto`}>
                <BsChevronLeft />
                <h1>
                  {prevPokemon.name} #
                  {prevPokemon.id.toString().padStart(3, '0')}
                </h1>
              </a>
            </Link>
          )}

          {nextPokemon !== null && (
            <Link href={`/pokemon/${nextPokemon.id}`} passHref>
              <a className={`${styles.link} ml-auto`}>
                <h1>
                  {nextPokemon.name} #
                  {nextPokemon.id.toString().padStart(3, '0')}
                </h1>
                <BsChevronRight />
              </a>
            </Link>
          )}
        </div>

        <h1 className={`${styles.heading} mx-auto`}>
          {pokemon.name}{' '}
          <span className="font-normal text-mediumGray">
            #{pokemon.id.toString().padStart(3, '0')}
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row w-full gap-4">
          <div className="w-full sm:w-[45%] shrink-0">
            <PokemonImage pokemon={pokemon} />
          </div>

          <div className="flex flex-col gap-8 bg-white rounded-md justify-center px-4 py-2 shadow-md">
            <PokemonAbout pokemon={pokemon} />
            <PokemonStat pokemon={pokemon} />
          </div>
        </div>
        <TypeChart pokemon={pokemon} typeEff={typeEff} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};

type MyParams = ParsedUrlQuery & {
  id: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as MyParams;

  const pokemon = await fetchSinglePokemon(Number(id));

  if (pokemon === null) {
    return {
      notFound: true
    };
  }

  const typeEff: {
    [key: string]: number;
  } = {};

  allTypes.forEach((type) => {
    typeEff[type] = calculateEffectiveness(
      type,
      pokemon.types.map((type) => type.type.name)
    );
  });

  const nextPokemon = await fetchSinglePokemon(Number(id) + 1);
  const prevPokemon = await fetchSinglePokemon(Number(id) - 1);

  return {
    props: {
      pokemon,
      nextPokemon,
      prevPokemon,
      typeEff
    }
  };
};

export default PokemonDetailPage;
