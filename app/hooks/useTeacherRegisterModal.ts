import { create } from 'zustand';

interface TeacherRegisterModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useTeacherRegisterModal = create<TeacherRegisterModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useTeacherRegisterModal;
