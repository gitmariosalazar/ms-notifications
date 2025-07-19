import { LogsNotificationsResponse } from '../schemas/dto/response/logs-notifications.response';
import { NotificationResponse } from '../schemas/dto/response/notification.response';
import { LogsNotificationsModel } from '../schemas/model/logs-notifications.model';
import { NotificationModel } from '../schemas/model/notification.model';

export interface InterfaceNotificationRepository {
  findAll(): Promise<NotificationResponse[]>;

  findById(idNotifications: string): Promise<NotificationResponse | null>;

  findByEmail(email: string): Promise<NotificationResponse[]>;

  create(notification: NotificationModel): Promise<NotificationResponse | null>;

  update(
    idNotifications: string,
    notification: NotificationModel,
  ): Promise<NotificationResponse | null>;

  delete(idNotifications: string): Promise<boolean>;

  existsById(idNotifications: string): Promise<boolean>;

  sendAndCreateNotification(
    notification: LogsNotificationsModel,
  ): Promise<LogsNotificationsResponse | null>;
}
