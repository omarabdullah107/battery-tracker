//File that includes all the types that has been used in the project.

export interface ChargingState {
    date: string;
    chargingLevel: number;
    internalEventId: number;
}

export type RootStackParamList = {
    BattaryTracker: undefined;
    Account: undefined;
    // Add other screens here if needed for the footer.
  };


export interface FooterProps {
    screenNames: (keyof RootStackParamList)[]; // Array of screen names
  }

export interface HeaderProps {
    title: string;
    showIcon?: boolean;
  }

export interface ProfileInfoProps {
  name: string;
  email: string;
  imageUri?: string;
}


export interface SettingsItemProps {
  label: string;
  onPress: () => void;
}