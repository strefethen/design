import React from 'react'
import {withRouter} from 'next/router'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import NextLink from 'next/link'
import {Text, Flex, Link, Sticky, BorderBox, Box} from '@primer/components'
import BoxShadow from './BoxShadow'
import {pageMap} from './utils'

const Header = ({router}) => (
  <Sticky zIndex={100}>
    <BoxShadow py={3} bg="gray.9" color="white">
      <Flex px={[3, 6, 6, 3]} alignItems="center" justifyContent="space-between">
        <NextLink href="/components">
          <Link ml={3} color="white" href="/components">
            <Flex alignItems="center" justifyContent="center">
              <Octicon icon={MarkGithub} size="medium" />
              <Text ml={3}>Primer Design Guidelines</Text>
            </Flex>
          </Link>
        </NextLink>
        <Box display={['none', 'none', 'block']}>
          <NextLink href="/components">
            <Link
              color="white"
              href="/components"
              px={4}
              fontWeight={router.pathname === '/components' ? 'bold' : null}
            >
              Docs
            </Link>
          </NextLink>
          <NextLink href="/components/sandbox">
            <Link
              color="white"
              href="/components/sandbox"
              mr={0}
              px={4}
              fontWeight={router.pathname === '/components/sandbox' ? 'bold' : null}
            >
              Sandbox
            </Link>
          </NextLink>
        </Box>
        <Box display={['block', 'block', 'none']}>
          <Link href="#sidenav">
            <BorderBox
              color="white"
              py="6px"
              px="12px"
              border={1}
              borderColor="gray.6"
              borderRadius={3}
              display="inline-block"
            >
              <Text fontWeight="bold" fontSize={1}>
                Menu
              </Text>
            </BorderBox>
          </Link>
        </Box>
      </Flex>
    </BoxShadow>
  </Sticky>
)

export default withRouter(Header)
