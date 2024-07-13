from __future__ import annotations

from enum import Enum as _Enum
from typing import TYPE_CHECKING

__version__ = '1.0.5'

if TYPE_CHECKING:
    from google.protobuf.message import Message as _Message

    FrecencyUserSettings = PreloadedUserSettings = PremiumMarketingComponentProperties = _Message
else:
    from .FrecencyUserSettings_pb2 import FrecencyUserSettings
    from .PreloadedUserSettings_pb2 import PreloadedUserSettings
    from .PremiumMarketingComponentProperties_pb2 import PremiumMarketingComponentProperties

__all__ = (
    '__version__',
    'UserSettingsType',
    'FrecencyUserSettings',
    'PreloadedUserSettings',
    'PremiumMarketingComponentProperties',
)


class UserSettingsType(_Enum):
    preloaded_user_settings = 1
    frecency_user_settings = 2
    test_settings = 3


UserSettingsImpl = {
    UserSettingsType.preloaded_user_settings: PreloadedUserSettings,
    UserSettingsType.frecency_user_settings: FrecencyUserSettings,
    UserSettingsType.test_settings: None,
}
