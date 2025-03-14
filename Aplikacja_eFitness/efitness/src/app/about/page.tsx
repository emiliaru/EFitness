'use client';

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  useColorModeValue,
  VStack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

export default function AboutPage() {
  return (
    <Container maxW={'7xl'}>
      {/* Hero Section */}
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              eFitness
            </Text>
            <br />
            <Text as={'span'} color={'blue.400'}>
              Twój Osobisty Trener
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            eFitness to innowacyjna aplikacja, która pomaga Ci osiągnąć Twoje cele
            fitness. Na podstawie Twoich indywidualnych potrzeb i preferencji,
            tworzymy spersonalizowane plany treningowe i żywieniowe. Monitoruj
            swoje postępy, otrzymuj wskazówki dotyczące treningu i diety, oraz
            osiągaj swoje cele zdrowotne z naszym wsparciem.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}
              as={'a'}
              href={'/register'}>
              Rozpocznij Teraz
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              as={'a'}
              href={'/login'}>
              Zaloguj się
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/images/exercises/fitness.jpg'}
            />
          </Box>
        </Flex>
      </Stack>

      {/* Instruction Section */}
      <VStack spacing={10} py={10}>
        <Heading as="h2" size="xl">
          Jak korzystać z aplikacji?
        </Heading>

        <Stack spacing={10} direction={{ base: 'column', md: 'row' }}>
          {/* Getting Started */}
          <Box flex={1}>
            <Heading as="h3" size="md" mb={4}>
              Rozpoczęcie
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Zarejestruj się w aplikacji
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Wypełnij ankietę zdrowotną
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Określ swoje cele fitness
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Podaj swoje preferencje żywieniowe
              </ListItem>
            </List>
          </Box>

          {/* Training Plan */}
          <Box flex={1}>
            <Heading as="h3" size="md" mb={4}>
              Plan Treningowy
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Otrzymasz spersonalizowany 5-dniowy plan treningowy
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Każde ćwiczenie zawiera opis i liczbę powtórzeń
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Zapisuj swoje postępy po każdym treningu
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Śledź historię treningów w zakładce "Postępy"
              </ListItem>
            </List>
          </Box>

          {/* Nutrition Plan */}
          <Box flex={1}>
            <Heading as="h3" size="md" mb={4}>
              Plan Żywieniowy
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Otrzymasz spersonalizowany plan żywieniowy
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Plan uwzględnia Twoje preferencje i alergenie
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Monitoruj spożycie kalorii i makroskładników
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Śledź swoje postępy w zakładce "Postępy"
              </ListItem>
            </List>
          </Box>
        </Stack>

        {/* Progress Tracking */}
        <Box w="full" pt={10}>
          <Heading as="h3" size="md" mb={4}>
            Śledzenie Postępów
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Regularnie zapisuj swoje pomiary ciała (waga, obwody)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Monitoruj postępy treningowe (obciążenia, powtórzenia)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Śledź spożycie kalorii i makroskładników
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Analizuj swoje postępy na wykresach
            </ListItem>
          </List>
        </Box>

        {/* Tips */}
        <Box w="full" bg={useColorModeValue('blue.50', 'blue.900')} p={6} rounded="xl">
          <Heading as="h3" size="md" mb={4}>
            Wskazówki
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Regularnie aktualizuj swoje pomiary dla lepszego śledzenia postępów
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Wypełnij dokładnie ankietę zdrowotną, aby otrzymać najlepiej dopasowane plany
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Zapisuj wszystkie treningi i posiłki na bieżąco
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
}
