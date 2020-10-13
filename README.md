# Setup

yarn install

# Run

## WEB

### terminal 1 - watch

cd packages/common

yarn watch

### terminal 2 - run

cd packages/web

yarn start

## APP

### terminal 1 - watch common creates dist on common

cd packages/common

yarn watch

### terminal 2 - watch from common to react native

cd packages/app

wml start

#### terminal 3 - prepare app

cd packages/app

yarn start

#### terminal 4 - start app

cd packages/app

react-native run-android
