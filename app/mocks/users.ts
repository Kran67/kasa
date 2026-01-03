import { User } from "@/app/interfaces/user";
import { UserRole } from "@/app/enums/enums";

export const usersMock: User[] = [
    { id: "1", name: "Nathalie Jean", email: "nathalie.jean@example.com", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg", role: UserRole.Owner },
    { id: "2", name: "Della Case", email: "della.case@example.com", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg", role: UserRole.Owner },
    { id: "3", name: "Franck Maher", email: "franck.maher@example.com", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg", role: UserRole.Owner },
    { id: "4", name: "Line Rolland", email: "line.rolland@example.com", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-3.jpg", role: UserRole.Owner },
    { id: "5", name: "Hugo Perrier", email: "hugo.perrier@example.com", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg", role: UserRole.Owner },
    { id: "6", name: "Sébastien Fournier", email: "sebastien.fournier@example.com", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-5.jpg", role: UserRole.Owner },
    { id: "7", name: "Adrien Chiran", email: "adrien.chiran@example.com", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg", role: UserRole.Owner },
    { id: "8", name: "Victor Moran", email: "victor.moran@example.com", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-7.jpg", role: UserRole.Owner },
    { id: "9", name: "Sarah Devit", email: "sarah.devit@example.com", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg", role: UserRole.Owner },
    { id: "10", name: "Karen Guillet", email: "karen.guillet@example.com", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-9.jpg", role: UserRole.Owner },
    { id: "11", name: "Julie Donatella", email: "julie.donatella@example.com", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-10.jpg", role: UserRole.Owner },
    { id: "12", name: "Michel Romy", email: "michel.romy@example.com", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-11.jpg", role: UserRole.Owner },
];