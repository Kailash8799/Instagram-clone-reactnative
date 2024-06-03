import React, {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useRef,
    useState,
} from "react";
import BottomSheet, {
    BottomSheetRefProps,
} from "@/src/components/bottomsheet/BottomSheet";

interface BottomSheetContextValue {
    showBottomSheet: () => void;
    hideBottomSheet: () => void;
}

interface BottomSheetProviderProps {
    children: ReactNode;
}

const BottomSheetContext = createContext<BottomSheetContextValue | null>(null);

export const BottomSheetProvider = ({ children }: BottomSheetProviderProps) => {
    const [content, setContent] = useState<ReactNode | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const bottomSheetRef = useRef<BottomSheetRefProps>(null);

    const showBottomSheet = useCallback(() => {
        // setContent(content);
        setIsVisible(true);
        bottomSheetRef.current?.scrollTo(-300);
    }, []);

    const hideBottomSheet = useCallback(() => {
        bottomSheetRef.current?.scrollTo(0);
        setTimeout(() => {
            setIsVisible(false);
            setContent(null);
        }, 300);
    }, []);

    return (
        <BottomSheetContext.Provider
            value={{ showBottomSheet, hideBottomSheet }}
        >
            {children}
            {isVisible && (
                <BottomSheet ref={bottomSheetRef}>{content}</BottomSheet>
            )}
        </BottomSheetContext.Provider>
    );
};

export const useBottomSheet = (): BottomSheetContextValue => {
    const context = useContext(BottomSheetContext);
    if (!context) {
        throw new Error(
            "useBottomSheet must be used within a BottomSheetProvider"
        );
    }
    return context;
};
